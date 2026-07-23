export type ProductStatus = 'Building' | 'Idea' | 'Launched' | 'Suite Vision';

export interface Product {
	id: string;
	slug: string;
	title: string;
	status: ProductStatus;
	shortDescription: string;
	targetAudience: string;
	waitlistId: string;
	order: number;
	featured: boolean;
	// Optional styling overrides for ProductCard
	statusBg?: string;
	statusText?: string;
}

export const products: Product[] = [
	{
		id: 'social_engagement_radar',
		slug: 'social-engagement-radar',
		title: 'Social Engagement Radar',
		status: 'Building',
		shortDescription: 'Monitor X and LinkedIn conversations in real-time. Find relevant discussions about your topics of interest, get AI-drafted responses ready to review, edit, and send. Easily plug into communities without manual monitoring.',
		targetAudience: 'Founders, product managers, and community builders looking to participate authentically on X and LinkedIn',
		waitlistId: 'social_engagement_radar',
		order: 1,
		featured: true
	},
	{
		id: 'ops_pilot',
		slug: 'ops-pilot',
		title: 'OpsPilot',
		status: 'Building',
		shortDescription: 'SMBs will be able to run their entire business with the operational efficiency and intelligence previously available only to enterprises with dedicated accounting, finance, customer support, sales & marketing, and operations teams.',
		targetAudience: 'Business leaders and ops teams managing fast-growing companies (20–200 people)',
		waitlistId: 'ops_pilot',
		order: 2,
		featured: true
	},
	{
		id: 'policyforge',
		slug: 'policy-forge',
		title: 'PolicyForge',
		status: 'Building',
		shortDescription: 'Generate compliant cybersecurity policies in minutes instead of weeks. Answer 15–20 questions about your technology stack and controls. Get framework-aligned security policies ready for audit submission. No expensive consulting.',
		targetAudience: 'Healthcare practices, fintech startups, B2B SaaS companies, and regulated SMBs with compliance deadlines',
		waitlistId: 'policyforge',
		order: 3,
		featured: true
	}
];

// SecureStack suite vision - not a standalone product, but a roadmap card
export interface SuiteVision {
	id: string;
	title: string;
	status: 'Suite Vision';
	statusBg: string;
	statusText: string;
	description: string;
	phases: {
		number: number;
		title: string;
		items: {
			name: string;
			description: string;
		}[];
	}[];
	strategicFit: string;
	differentiator: string;
	timeline: string;
	timelineNote: string;
}

export const secureStackVision: SuiteVision = {
	id: 'secure_stack',
	title: 'SecureStack',
	status: 'Suite Vision',
	statusBg: 'bg-[#202020] dark:bg-neutral-700',
	statusText: 'text-white',
	description: 'A modular AI-native cybersecurity compliance suite of products for regulated SMBs and the defense industry supply chain at large. Each product reinforces the others, building a coherent story: <strong>"We assessed our gaps, generated policies, scanned our codebase for crypto vulnerabilities, and had everything organized for our auditor in 4 weeks — using one integrated suite."</strong>',
	phases: [
		{
			number: 1,
			title: 'Phase 1: Foundation (Q3–Q4 2026)',
			items: [
				{
					name: 'PolicyForge',
					description: 'Generate and manage security policies aligned to SOC 2, ISO 27001, HIPAA, NIST, CMMC. Feeds everything downstream in SecureStack.'
				},
				{
					name: 'CipherScan',
					description: 'Cryptographic vulnerability scanning and remediation. Detects weak crypto (RSA, ECC, MD5, SHA1) in codebases and live endpoints, generates AI-powered remediation guidance.'
				}
			]
		},
		{
			number: 2,
			title: 'Phase 2: Comprehensive Compliance (Q1 2027)',
			items: [
				{
					name: 'ComplianceQ',
					description: '<strong>Turns compliance findings into audit-ready evidence.</strong> Interviews you about gaps, maps to CMMC/SOC 2/ISO 27001 controls, generates policies (via PolicyForge), collects artifacts, and organizes everything for your C3PAO assessor. The bridge between assessment and audit readiness.'
				}
			]
		},
		{
			number: 3,
			title: 'Phase 3: Suite Expansion (Q2 2027)',
			items: [
				{
					name: 'ThreatBrief',
					description: 'Daily threat intelligence digest tailored to your industry and tech stack. Monitors CVE feeds, maps threats to your infrastructure, delivers executive-ready briefings.'
				},
				{
					name: 'VendorShield',
					description: 'Third-party vendor risk management and assessment automation. Completes your security posture by auditing the tools and vendors you depend on.'
				}
			]
		}
	],
	strategicFit: 'Designed for cybersecurity-regulated SMBs (healthcare, fintech, defense tech, SaaS) and National Department of Defence-adjacent partners. Each product solves a specific bottleneck; together they form a complete security + compliance suite that competes with Drata, Vanta, and enterprise GRC tools — but at SMB pricing and speed.',
	differentiator: 'Built by a founder shipping modern UX instead of enterprise bloat. Every recommendation is auditable and cited — not black-box scoring. Developed transparently in public so you see exactly what you\'re getting.',
	timeline: 'PolicyForge (Q3 2026) → CipherScan (Q4 2026) → ComplianceQ (Q1 2027)',
	timelineNote: 'ThreatBrief & VendorShield follow based on customer feedback and market response.'
};

// Helper to get featured products for home page (max 4)
export function getFeaturedProducts(maxCount: number = 4): Product[] {
	return products
		.filter(p => p.featured)
		.sort((a, b) => a.order - b.order)
		.slice(0, maxCount);
}

// Helper to get all products sorted by order
export function getAllProducts(): Product[] {
	return [...products].sort((a, b) => a.order - b.order);
}

// Helper to get a single product by slug
export function getProductBySlug(slug: string): Product | undefined {
	return products.find(p => p.slug === slug);
}
