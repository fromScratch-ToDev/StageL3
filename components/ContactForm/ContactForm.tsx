import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contactez-nous</CardTitle>
          <CardDescription>
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input id="nom" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input id="prenom" placeholder="Votre prénom" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre.email@exemple.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Votre message..." className="min-h-[120px]" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full md:w-auto">
            Envoyer
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
