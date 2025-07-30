"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PawPrint } from "lucide-react"
import { CountryCodeSelect } from "@/components/CountryCodeSelect"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [method, setMethod] = useState<"email" | "phone" | null>(null)
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("+91") 
  const [phone, setPhone] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      alert(`Reset email sent to ${email}`)
      router.push("/sign-in")
    } catch (error) {
      console.error(error)
      alert("Error sending reset email. Check the address.")
    }
    setIsLoading(false)
  }

  
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const fullPhone = `${countryCode}${phone}`

    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
      alert(`OTP sent to ${fullPhone} (accept any 6-digit code)`)
    }, 1000)
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length === 6) {
      alert("OTP verified successfully! Please set your new password.")
      router.push("/set-password")
    } else {
      alert("Please enter a 6-digit OTP.")
    }
  }

  const handleResendOtp = () => {
    setOtp("")
    setOtpSent(false)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <PawPrint className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
        </CardHeader>

        {method === null && (
          <CardContent className="space-y-4 text-center">
            <Button className="w-full" onClick={() => setMethod("email")}>
              Reset via Email
            </Button>
            <Button className="w-full" onClick={() => setMethod("phone")}>
              Reset via Phone
            </Button>
          </CardContent>
        )}

        {/* Email Reset Form */}
        {method === "email" && (
          <form onSubmit={handleEmailSubmit}>
            <CardContent className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
              <Button variant="link" onClick={() => setMethod(null)}>
                Back
              </Button>
            </CardFooter>
          </form>
        )}

        {/* Phone Reset Form */}
        {method === "phone" && !otpSent && (
          <form onSubmit={handlePhoneSubmit}>
            <CardContent className="space-y-4">
              <Label htmlFor="countryCode">Country Code</Label>
              <CountryCodeSelect value={countryCode} onChange={setCountryCode} />

              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send OTP"}
              </Button>
              <Button variant="link" onClick={() => setMethod(null)}>
                Back
              </Button>
            </CardFooter>
          </form>
        )}

        {/* OTP Verification */}
        {method === "phone" && otpSent && (
          <form onSubmit={handleVerifyOtp}>
            <CardContent className="space-y-4">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter any 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" type="submit">
                Verify OTP
              </Button>
              <Button variant="link" onClick={handleResendOtp}>
                Resend OTP
              </Button>
            </CardFooter>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center text-xs text-muted-foreground">
          Secure, encrypted connection
        </div>
      </Card>
    </div>
  )
}