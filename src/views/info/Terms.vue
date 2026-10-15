<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Website Terms of Use</h1>
      <div class="panel">
        <h2>Website Terms of Use</h2>
        <h3>Use of this website.</h3>
        <h3>Links to third party sites</h3>
        <h3>Limitation of liability</h3>
        <h3>Trademarks</h3>
        <p>Zelix KlassMaster(TM) - Website Terms of Use</p>
        <p>Your access and use of this website constitutes your agreement to these Terms of Use. "This website" means all webpages located on the www.zelix.com domain name.</p>
        <p>This website is for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from or through this website.</p>
        <p>As a condition of your use of this website, you will not use the website for any purpose that is unlawful or prohibited by these terms of use.</p>
        <p>You may not use the website in any manner that could damage, disable, overburden, or impair any server or networks, or interfere with any other party's use of this website.</p>
        <p>You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through this website.</p>
        <p>Any third party websites which may be accessed through this website are the sole responsibility of the third party posting the website.</p>
        <p>Zelix Pty makes no warranty, express or implied, as to the accuracy of any information on third party websites and accepts no liability whatsoever for any errors and omissions or for any damage or injury to persons or property arising out of the use or operation of any materials, instructions, methods or ideas contained on such websites.</p>
        <p>This website is provided on an "as is" and "as available" basis. Zelix Pty Ltd expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
        <p>Zelix Pty Ltd is not liable to you for any cost, loss or liability (including loss of profits or interruption of business) however caused even if Zelix Pty Ltd has been advised of the possibility of such damages.</p>
        <p>Zelix, KlassMaster, Zelix KlassMaster, Smart Save, Heavy Duty Protection and all related trademarks, trade names, logos, characters, design, and trade dress are trademarks or registered trademarks of Zelix Pty Ltd and may not be used without written permission. All other trademarks are the property of their respective owners.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Website Terms of Use",
  "url": "https://zkm-web.vercel.app/page/terms"
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
      "name": "Website Terms of Use"
    }
  ]
}]
useHead({
  title: 'Website Terms of Use | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Website Terms of Use | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/terms' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
