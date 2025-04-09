import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import Default from '@/layouts/Default'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ExternalLink, Link as LinkIcon } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Donation {
  id: number
  name: string
  link: string
  created_at: string
}

interface Props {
  donations: Donation[]
  flash: {
    success?: string | null
    error?: string | null
  }
}

export default function DonationPage({ donations, flash = { success: null, error: null } }: Props) {
  const [showForm, setShowForm] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    link: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/donations', {
      onSuccess: () => {
        reset()
        setShowForm(false)
      },
    })
  }

  return (
    <Default>
      <Head>
        <title>Donation Links</title>
        <meta name="description" content="Support humanitarian causes by donating to verified organizations" />
        <meta name="keywords" content="donations, humanitarian causes, verified organizations" />
        <meta name="author" content="Project Humanity" />
        <meta name="robots" content="index, follow" />
        <meta name="url" content={window.location.href} />
      
      </Head>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Donation Links</h1>
              <p className="text-muted-foreground">Support humanitarian causes by donating to verified organizations</p>
            </div>
            <Button onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : 'Submit Link'}
            </Button>
          </div>

          {flash?.success && (
            <Alert className="mb-6">
              <AlertDescription>{flash.success}</AlertDescription>
            </Alert>
          )}

          {showForm && (
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Submit a Donation Link</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Organization Name (Optional)</Label>
                  <Input
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    placeholder="Enter organization name"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="link">Donation Link</Label>
                  <Input
                    id="link"
                    value={data.link}
                    onChange={e => setData('link', e.target.value)}
                    placeholder="https://"
                    required
                  />
                  {errors.link && <p className="text-sm text-red-500 mt-1">{errors.link}</p>}
                </div>
                <Button type="submit" disabled={processing}>
                  Submit for Approval
                </Button>
              </form>
            </div>
          )}

          <div className="grid gap-4">
            {donations.length > 0 ? (
              donations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">
                        {donation.name || 'Anonymous Donation Link'}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate max-w-[300px] sm:max-w-[500px]">
                        {donation.link}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={donation.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Open link</span>
                    </a>
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No approved donation links available yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </Default>
  )
}
