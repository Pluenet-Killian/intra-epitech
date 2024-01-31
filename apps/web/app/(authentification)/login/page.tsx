import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <>
            <Card className="mt-2 border-none shadow-none">
            <CardHeader>
                <CardTitle>Veuillez-vous connecter</CardTitle>
                <CardDescription>Connectez-vous afin d'avoir accès à l'intranet d'epitech</CardDescription>
            </CardHeader>
            <CardContent>
                <Label htmlFor="email">Email</Label>
                <Input className="mt-2 focus:border-none" type="email" name="email" placeholder="example@epitech.eu"/>
            </CardContent>
            <CardContent>
                <Label htmlFor="password">Mot de passe</Label>
                <Input className="mt-2 focus:border-none" type="password" name="password"/>
            </CardContent>
            <CardFooter className="flex items-center justify-end space-x-2">
                <Button className="bg-transparent text-black hover:bg-transparent">S'enregistrer</Button>
                <Button className="bg-[#0069B3] hover:bg-[#0161A4]">Se connecter</Button>
            </CardFooter>
            </Card>
        </>
    )
}