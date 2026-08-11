import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            At Admin Assist, we take your privacy and the security of your data extremely seriously. 
            This policy outlines how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-slate-500 font-medium">
            Last Updated: August 2026
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-600">
            
            <h2 className="flex items-center gap-2 text-2xl mb-4">
              <FileText className="w-6 h-6 text-brand-600" /> 1. Information We Collect
            </h2>
            <p className="mb-8">
              We collect information that you provide directly to us when you use our website, contact us, or engage our services. This includes:
            </p>
            <ul className="space-y-2 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Contact Information:</strong> Name, email address, phone number, and company details.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Service Data:</strong> Information related to your repossession operations, software stacks (like Clearplan/RDN), and specific workflow requirements.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Usage Data:</strong> Automatically collected data such as IP addresses, browser types, and interaction metrics on our website.</span>
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl mb-4">
              <Lock className="w-6 h-6 text-brand-600" /> 2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for the following enterprise purposes:
            </p>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>To provide, maintain, and improve our remote administrative services.</li>
              <li>To process your service requests and manage your account.</li>
              <li>To communicate with you regarding updates, security alerts, and support messages.</li>
              <li>To comply with legal obligations, including FDCPA regulations relevant to our industry.</li>
            </ul>

            <h2 className="text-2xl mb-4">3. Data Security & Confidentiality</h2>
            <p className="mb-8">
              Because we operate within the repossession and financial recovery sectors, security is our top priority. We implement enterprise-grade security measures to protect your data against unauthorized access, alteration, or destruction. All our remote staff operate under strict NDAs and utilize secure, encrypted connections. We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-2xl mb-4">4. Third-Party Integrations</h2>
            <p className="mb-8">
              Our services often require integration with third-party platforms (e.g., Clearplan, RDN, Zendesk). While we ensure secure API connections, your data on those platforms is also governed by their respective privacy policies.
            </p>

            <h2 className="text-2xl mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact our compliance team:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-900 m-0">Admin Assist Compliance</p>
              <p className="m-0 mt-1">Coastal Highway, Lewes, DE 19958</p>
              <p className="m-0 mt-1">Phone: (407) 900-0208</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
