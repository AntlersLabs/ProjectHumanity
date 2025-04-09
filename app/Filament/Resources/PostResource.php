<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Basic Information')
                    ->description('Enter the basic information about the post')
                    ->icon('heroicon-o-information-circle')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->live(onBlur: true)
                            ->required()
                            ->maxLength(255)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->columnSpan(2),
                        
                        Select::make('category_id')
                            ->label('Category')
                            ->preload()
                            ->searchable()
                            ->options(\App\Models\Category::pluck('name', 'id'))
                            ->required(),
                            
                        TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->unique(ignoreRecord: true),
                            
                        Toggle::make('published'),
                        Toggle::make('breaking'),
                            
                    ]),

                Section::make('Media & Content')
                    ->description('Upload images and write your post content')
                    ->icon('heroicon-o-photo')
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->imageEditor()
                            ->directory('posts')
                            ->columnSpanFull(),
                            
                        TextInput::make('summary')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                            
                        RichEditor::make('content')
                            ->required()
                            ->toolbarButtons([
                                'blockquote',
                                'bold',
                                'bulletList',
                                'codeBlock',
                                'h2',
                                'h3',
                                'italic',
                                'link',
                                'orderedList',
                                'redo',
                                'strike',
                                'undo',
                            ])
                            ->columnSpanFull(),
                    ]),

                Section::make('SEO & Meta')
                    ->description('Search engine optimization settings')
                    ->icon('heroicon-o-magnifying-glass')
                    ->collapsed()
                    ->schema([
                        TextInput::make('meta_title')
                            ->maxLength(60),
                        TextInput::make('meta_description')
                            ->maxLength(160),
                        TextInput::make('meta_keywords')
                            ->maxLength(255),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->square()
                    ->size(40),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\IconColumn::make('breaking')
                    ->boolean(),
                Tables\Columns\IconColumn::make('published')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'name'),
                Tables\Filters\TernaryFilter::make('published'),
                Tables\Filters\TernaryFilter::make('breaking'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make()->after(function (Post $record) {
                    // delete single
                    if ($record->image) {
                       Storage::disk('public')->delete($record->image);
                    }

                 }),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Content Management';
    }
}
