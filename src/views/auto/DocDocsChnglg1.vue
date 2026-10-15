<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Sample Change Log File</h1>
      <div class="panel">
        <h2>Sample Change Log File</h2>
        <pre class="code"><code>Package: pack1	NameNotChanged
Package: pack1.pack2	=&gt;	pack1.b

Class: pack1.Class1	NameNotChanged
	Source: Class1.java
	FieldsOf: pack1.Class1
		pack1.Class1$Class10 aClass1$Class10_4	=&gt;	a
		pack1.Class5 aClass1_5	=&gt;	b
		int anInt1	=&gt;	c
		int anInt14	=&gt;	d
		int anInt15	=&gt;	e
		int anInt2	=&gt;	f
		public int anInt3	NameNotChanged
		static int anInt7	=&gt;	g
		int[] anIntArray6	=&gt;	h
		java.lang.String field10	=&gt;	i
		private final field11	=&gt;	j
		private static int field12	=&gt;	k
		private long field13	=&gt;	l
		static final int field8	=&gt;	m
		static int field9	=&gt;	n
	MethodsOf: pack1.Class1
		public static void main(java.lang.String[])	NameNotChanged
		void method1()	NameNotChanged
		int method10()	=&gt;	a
		java.lang.String method11()	=&gt;	b
		void method12(pack1.Class1)	=&gt;	a
		void method13(pack1.Class1$Class10)	=&gt;	a
		void method14()	NameNotChanged
		void method15(java.lang.String, int)	=&gt;	a
		private static void method16(java.lang.String, java.lang.String)	=&gt;	a
		static void method17(pack1.Class1)	=&gt;	b
		static void method18()	=&gt;	c
		pack1.Class5 method8()	NameNotChanged
		private static java.lang.String toString(java.lang.String)	=&gt;	a
		public void update(java.util.Observable, java.lang.Object)	NameNotChanged
	LineNumbersOf: pack1.Class1
		6	=&gt;	46
		15	=&gt;	21
		16	=&gt;	12
		17	=&gt;	28 and 39
		18	=&gt;	11
		19	=&gt;	19
		23	=&gt;	48
		24	=&gt;	26
		25	=&gt;	34
		26	=&gt;	31
		27	=&gt;	45
		28	=&gt;	9
		29	=&gt;	14
		30	=&gt;	30
		31	=&gt;	2
		32	=&gt;	36
		35	=&gt;	33 and 51
		36	=&gt;	41
		37	=&gt;	20
		38	=&gt;	1
		42	=&gt;	40
		45	=&gt;	52
		46	=&gt;	18
		47	=&gt;	17
		48	=&gt;	22
		49	=&gt;	49
		52	=&gt;	10
		53	=&gt;	23
		56	=&gt;	7
		57	=&gt;	13
		58	=&gt;	15
		63	=&gt;	53
		64	=&gt;	16
		74	=&gt;	32
		75	=&gt;	54
		76	=&gt;	6
		77	=&gt;	29
		78	=&gt;	25
		81	=&gt;	5
		82	=&gt;	50
		83	=&gt;	44
		84	=&gt;	47
		85	=&gt;	3
		86	=&gt;	24
		87	=&gt;	0
		88	=&gt;	35
		89	=&gt;	27
		137	=&gt;	38
		138	=&gt;	37
		141	=&gt;	42
		150	=&gt;	43
		159	=&gt;	4
		163	=&gt;	8</code></pre>
        <p>Entries in the log are in the form old name =&gt; new name .</p>
        <p>Package: pack1 NameNotChanged Package: pack1.pack2 =&gt; pack1.b</p>
        <p>Class: pack1.Class1 NameNotChanged Source: Class1.java FieldsOf: pack1.Class1 pack1.Class1$Class10 aClass1$Class10_4 =&gt; a pack1.Class5 aClass1_5 =&gt; b int anInt1 =&gt; c int anInt14 =&gt; d int anInt15 =&gt; e int anInt2 =&gt; f public int anInt3 NameNotChanged static int anInt7 =&gt; g int[] anIntArray6 =&gt; h java.lang.String field10 =&gt; i private final field11 =&gt; j private static int field12 =&gt; k private long field13 =&gt; l static final int field8 =&gt; m static int field9 =&gt; n MethodsOf: pack1.Class1 public static void main(java.lang.String[]) NameNotChanged void method1() NameNotChanged int method10() =&gt; a java.lang.String method11() =&gt; b void method12(pack1.Class1) =&gt; a void method13(pack1.Class1$Class10) =&gt; a void method14() NameNotChanged void method15(java.lang.String, int) =&gt; a private static void method16(java.lang.String, java.lang.String) =&gt; a static void method17(pack1.Class1) =&gt; b static void method18() =&gt; c pack1.Class5 method8() NameNotChanged private static java.lang.String toString(java.lang.String) =&gt; a public void update(java.util.Observable, java.lang.Object) NameNotChanged LineNumbersOf: pack1.Class1 6 =&gt; 46 15 =&gt; 21 16 =&gt; 12 17 =&gt; 28 and 39 18 =&gt; 11 19 =&gt; 19 23 =&gt; 48 24 =&gt; 26 25 =&gt; 34 26 =&gt; 31 27 =&gt; 45 28 =&gt; 9 29 =&gt; 14 30 =&gt; 30 31 =&gt; 2 32 =&gt; 36 35 =&gt; 33 and 51 36 =&gt; 41 37 =&gt; 20 38 =&gt; 1 42 =&gt; 40 45 =&gt; 52 46 =&gt; 18 47 =&gt; 17 48 =&gt; 22 49 =&gt; 49 52 =&gt; 10 53 =&gt; 23 56 =&gt; 7 57 =&gt; 13 58 =&gt; 15 63 =&gt; 53 64 =&gt; 16 74 =&gt; 32 75 =&gt; 54 76 =&gt; 6 77 =&gt; 29 78 =&gt; 25 81 =&gt; 5 82 =&gt; 50 83 =&gt; 44 84 =&gt; 47 85 =&gt; 3 86 =&gt; 24 87 =&gt; 0 88 =&gt; 35 89 =&gt; 27 137 =&gt; 38 138 =&gt; 37 141 =&gt; 42 150 =&gt; 43 159 =&gt; 4 163 =&gt; 8</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sample Change Log File",
  "url": "https://zkm-web.vercel.app/docs/chnglg1"
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
      "name": "Docs",
      "item": "https://zkm-web.vercel.app/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sample Change Log File"
    }
  ]
}]
useHead({
  title: 'Sample Change Log File | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Sample Change Log File | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/chnglg1' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
