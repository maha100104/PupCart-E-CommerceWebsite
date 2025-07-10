import Link from "next/link"
import { FileText } from "lucide-react"
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart- Terms And Conditions Page"
  }
}

export default function TermsPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: May 13, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to PupCart! These terms and conditions outline the rules and regulations for using our website 
            and services. By accessing or using our site, you agree to be bound by these terms in full. 
            If you do not agree, please do not continue using PupCart.
          </p>

          <h2><strong>1. Definitions</strong></h2>
          <p><strong>Throughout these Terms:</strong></p>
          <ul>
            <li>1. "Client", "You", "Your" refers to you, the user or customer accessing this website and agreeing to the Company’s terms.</li>
            <li>2. "The Company", "Ourselves", "We", "Our", "Us" refers to PupCart.</li>
            <li>3. "Parties" or "Us" refers to both the user and PupCart, or either one.</li>
          </ul>

          <h2><strong>2. License</strong></h2>
          <p>
            Unless otherwise stated, PupCart and/or its licensors own the intellectual 
            property rights for all material on this website. All rights are reserved.
          </p>
          <p>You may not:</p>
          <ul>
            <li>1. Republish content from PupCart</li>
            <li>2. Sell, rent or sublicense our material</li>
            <li>3. Reproduce, duplicate, or copy content</li>
            <li>4. Redistribute content without written permission</li>
          </ul>
          <p>You may view and print pages for personal use, subject to these terms.</p>

          <h2><strong>3. User Comments</strong></h2>
          <p>Users may have the option to post reviews, ratings, or comments.</p>
          <p>You are solely responsible for:</p>
          <ul>
            <li>The legality and accuracy of your posts</li>
            <li>Avoiding any third-party copyright or trademark violations</li>
            <li>Ensuring that content is not offensive, illegal, or misleading</li>
            <li>Not exploiting or soliciting minors in any way</li>
          </ul>
          <p>
            PupCart is not liable for user-generated content but reserves the right to remove it at any time.
          </p>

          <h2><strong>4. Product Information</strong></h2>
          <p>
            We strive to provide accurate product descriptions and images. 
            However, we do not guarantee that all content is always error-free or current. 
            If a product does not match its description, your sole remedy is to return it unused under our return policy.
          </p>

          <h2><strong>5. Pricing and Payment</strong></h2>
          <p>All prices are shown in Indian Rupees (INR).</p>
          <p>Prices may change without prior notice.</p>

          <h2><strong>6. Shipping and Delivery</strong></h2>
          <p>We currently ship across India via trusted logistics partners.</p>
          <p>Delays may occur due to unforeseen events (weather, strikes, etc.).</p>
          <p>Tracking details will be provided upon dispatch.</p>

          <h2><strong>7. Returns and Refunds</strong></h2>
          <p>You may return eligible items within 7 days of delivery. Returns are accepted if:</p>
          <p>The item is unused, in original packaging, and in sellable condition.</p>
          <p>The item is not ineligible (e.g., perishable items, pet food already opened, grooming products, etc.).</p>
          <p>Refunds will be processed after inspection and typically reflect within 5–7 business days.</p>

          <h2><strong>8. Disclaimer</strong></h2>
          <p>
            All content and services on PupCart are provided on an "as-is" basis. 
            We make no guarantees or warranties—express or implied—regarding the content, product accuracy, or availability.
          </p>

          <h2><strong>9. Limitations of Liability</strong></h2>
          <p>In no event shall PupCart be liable for:</p>
          <p>Indirect or consequential damages</p>
          <p>Loss of profits or data</p>
          <p>Interruptions caused by third-party providers or systems</p>

          <h2><strong>10. Governing Law</strong></h2>
          <p>
            These Terms are governed by the laws of India, and any disputes
            shall fall under the exclusive jurisdiction of courts in Chennai, Tamil Nadu.
          </p>

          <h2><strong>11. Changes to Terms</strong></h2>
          <p>
            PupCart reserves the right to modify these terms at any time. 
            We recommend reviewing this page regularly. Continued use after updates implies your acceptance of the new terms.
          </p>

          <h2><strong>12. Contact Information</strong></h2>
          <p>If you have any questions regarding these Terms & Conditions, feel free to contact us:</p>
          <address>
            PupCart
            <br />
            20A PupCart

            <br />
            Madhanakuppam Rd, Kallikuppam, Ambattur, Chennai 600099, Tamil Nadu, India
            <br />
            Email: <a href="mailto:pupcart@gmail.com">privacy@pupcart.in</a>
            <br />
            Phone: 7010063177
          </address>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
          {" | "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
