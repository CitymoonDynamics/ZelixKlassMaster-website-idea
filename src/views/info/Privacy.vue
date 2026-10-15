<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Privacy Policy</h1>
      <div class="panel">
        <ul>
          <li>Privacy Policy</li>
          <li>Privacy Policy Last Updated 22 October 2024.</li>
          <li>Zelix Pty Ltd respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our software. Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the site.</li>
          <li>1. Information We Collect We may collect information about you including personally identifiable information, such as your name, email address, phone number, and billing information, which you voluntarily give when you purchase our software or interact with us. We may also use cookies and similar tracking technologies to track the activity on our website and store certain information.</li>
          <li>2. How We Use Your Information We may use the information we collect in the following ways:</li>
          <li>To process and manage your orders.</li>
          <li>To communicate with you, including sending updates about your order.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To improve our website and software based on your feedback.</li>
          <li>To send marketing communications, if you have opted in to receive them.</li>
        </ul>
        <h2>3. Disclosure of Your Information</h2>
        <ul>
          <li>With Service Providers: We may share your information with third-party vendors who provide services on our behalf, such as payment processing, order fulfillment, and marketing services.</li>
          <li>Legal Compliance: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
        </ul>
        <h3>4. Security of Your Information</h3>
        <h3>5. Your Rights</h3>
        <ul>
          <li>The right to access, correct, or delete your personal information.</li>
          <li>The right to object to or restrict the processing of your data.</li>
        </ul>
        <h3>6. Changes to This Privacy Policy</h3>
        <p>Zelix Pty Ltd respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our software.</p>
        <p>Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the site.</p>
        <p>We may collect information about you including personally identifiable information, such as your name, email address, phone number, and billing information, which you voluntarily give when you purchase our software or interact with us.</p>
        <p>We may also use cookies and similar tracking technologies to track the activity on our website and store certain information.</p>
        <p>We may use the information we collect in the following ways:</p>
        <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
        <p>We take the security of your personal information seriously.</p>
        <p>We implement reasonable measures to protect your information from unauthorized access, use, or disclosure.</p>
        <p>However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
        <p>You have certain rights regarding your personal information, including:</p>
        <p>To exercise these rights, please email us at</p>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a new effective date.</p>
        <p>We encourage you to review this Privacy Policy periodically for any changes.</p>
        <p>If you have any comments or questions concerning this policy please feel free to contact us at</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "url": "https://zkm-web.vercel.app/page/privacy"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zkm-web.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Reference",
      "item": "https://zkm-web.vercel.app/reference"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Privacy Policy"
    }
  ]
}]
useHead({
  title: 'Privacy Policy | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Privacy Policy | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/privacy' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
