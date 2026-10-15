<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Privacy Policy</h1>
      <div class="panel">
        <ul>
          <li>Privacy Policy</li>
          <li>Refund Policy Last updated: 29 May 2025</li>
          <li>We want you to be satisfied with your software purchase. This Refund Policy outlines our terms regarding refunds and returns.</li>
          <li>1. Refund Eligibility We offer a 14-day money-back guarantee for our software products. You may request a refund if you are not satisfied with the software for any reason.</li>
          <li>2. Requesting a Refund To initiate a refund request, please follow these steps:</li>
          <li>Contact our customer support team at within 14 days of your purchase.</li>
          <li>Provide your order number, the reason for the refund, and any relevant details regarding your experience with the software.</li>
        </ul>
        <h2>3. Refund Process</h2>
        <ul>
          <li>Review your request and may reach out for additional information if needed.</li>
          <li>Initiate the refund process with the Merchant of Record within 24 hours of approval.</li>
        </ul>
        <h3>4. Changes to This Refund Policy</h3>
        <h3>5. Contact Us</h3>
        <p>We offer a 14-day money-back guarantee for our software products. You may request a refund if you are not satisfied with the software for any reason.</p>
        <p>To initiate a refund request, please follow these steps:</p>
        <p>Once we receive your refund request, we will:</p>
        <p>We may update this Refund Policy from time to time. Any changes will be posted on this page with a new effective date. We encourage you to review this policy periodically.</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/refunds"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Reference",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/reference"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Privacy Policy"
    }
  ]
}]
useHead({
  title: 'Privacy Policy | Zelix KlassMaster2',
  meta: [{ name: 'description', content: 'Privacy Policy | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/refunds' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
