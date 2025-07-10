import Link from "next/link"
import { Shield } from "lucide-react"
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart- Privacy Policy Page"
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 13, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At PupCard, we value and respect your privacy. This Privacy Policy outlines how we collect, use, share, 
            and protect your personal information when you visit our website or make a purchase. By using our services,
             you agree to the practices described below.
          </p>

          <h2><strong>🔍Information We Collect</strong></h2>
          <p>
           We collect information from you in the following ways:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
              information you provide when creating an account, making a purchase, or contacting customer service.
            </li>
            <li>
              <strong>Transaction Information:</strong>  Purchase history, payment method, and order details (all handled securely).
            </li>
            <li>
              <strong>Device and Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs.
            </li>
            <li>
              <strong>Cookies & Tracking: </strong> We use cookies and similar technologies to enhance user experience,
               analyze traffic, and deliver personalized content.
            </li>
          </ul>

          <h2><strong>📦How We Use Your Information</strong></h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>1.Process orders and deliver products efficiently.</li>
            <li>2.Communicate order status and send support notifications.</li>
            <li>3.Personalize your shopping experience with product recommendations.</li>
            <li>4.Provide customer support and respond to queries.</li>
            <li>5.Detect and prevent fraud or misuse of our services.</li>
            <li>6.Comply with applicable Indian laws and regulations.</li>
          </ul>

          <h2><strong>🔁Sharing Your Information</strong></h2>
          <p>
            We may share your data under these circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong>With trusted partners like payment gateways, delivery partners, 
              and email/SMS providers (e.g., Razorpay, Shiprocket).
           </li>
            <li>
              <strong>Legal Requirements:</strong> To comply with court orders, government requests, or legal obligations.
            </li>
            <li>
              <strong>Business Changes:</strong> If PupCard is acquired or merged, your data may be transferred as part of
               business assets.
            </li>
            <li>
              <strong>Marketing: </strong> With your explicit consent, we may share data with third-party marketing 
              tools or platforms.
            </li>
          </ul>

          <h2><strong>🔐Security of Your Data</strong></h2>
          <p>
            We use strong administrative and technical measures to protect your information (SSL encryption, secure servers,
             and access control). However, no digital system is entirely immune to breaches—please 
             use strong passwords and never share OTPs.
             
          </p>

          <h2><strong>⚙️Your Choices</strong></h2>
          <p>You have full control over your data:</p>
          <ul>
            <li>
              <strong>Cookies: </strong> Manage cookie preferences via your browser settings.
            </li>
            <li>
              <strong>Marketing:</strong> Unsubscribe links are provided in every email we send.
            </li>
            <li>
              <strong>Account Information:</strong> Update your profile or request deletion anytime via 
              your account dashboard or support.
            </li>
          </ul>

          <h2><strong>🚫Children’s Privacy</strong></h2>
          <p>
           PupCard does not knowingly collect data from children under 13. If we discover such data 
           has been collected unintentionally, we will delete it promptly.
          </p>

          <h2><strong>🔄Changes to this Policy</strong></h2>
          <p>
            We may update this Privacy Policy to reflect improvements or regulatory changes. The latest 
            version will always be available on this page with a revised “Last Updated” date.
          </p>

          <h2><strong>📞Contact Us</strong></h2>
          <p>For any privacy-related questions, please contact us:</p>
          <address>
            PupCart
            <br />
            20A PupCart

            <br />
           Madhanakuppam Rd, Kallikuppam, Ambattur, Chennai 600099, Tamil Nadu, India
            <br />
           📧Email:<a href="mailto:infopupcart@gmail.com">privacy@pupcard.in</a>
            <br />
            Phone: 7010063177
          </address>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
          {" | "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
