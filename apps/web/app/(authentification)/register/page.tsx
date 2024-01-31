import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
    return (
        <>
            <Card className="mt-2 border-none shadow-none">
            <CardHeader>
                <CardTitle>Veuillez-vous enregistrer</CardTitle>
                <CardDescription>Enregistrer-vous afin d'avoir accès à l'intranet d'epitech</CardDescription>
            </CardHeader>
            <CardContent>
                <Label htmlFor="email">Email</Label>
                <Input className="mt-2 focus:border-none" type="email" name="email" placeholder="example@epitech.eu"/>
            </CardContent>
            <CardContent>
                <Label htmlFor="password">Mot de passe</Label>
                <Input className="mt-2 focus:border-none" type="password" name="password"/>
            </CardContent>
            <CardContent>
                <Label htmlFor="confirmPassword">Confirmation mot de passe</Label>
                <Input className="mt-2 focus:border-none" type="password" name="confirmPassword" placeholder=""/>
            </CardContent>
            <CardFooter className="flex items-center justify-end space-x-2">
                <Button className="bg-transparent text-black hover:bg-transparent">Se connecter</Button>
                <Button className="bg-[#0069B3] hover:bg-[#0161A4]">S'enregistrer</Button>
            </CardFooter>
            </Card>
        </>
    )
}