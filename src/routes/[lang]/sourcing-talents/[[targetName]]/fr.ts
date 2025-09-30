export const content = {
	sourcingTalents: {
		hero: {
			title: 'Arrêtez de vous faire ghoster 👻',
			subtitle: 'Le recrutement de développeurs, par des développeurs.',
			videoPlaceholder: 'Vidéo explicative bientôt disponible',
			cta1: 'Réserver une rencontre',
			cta1Href: 'https://calendar.app.google/dJZc5wBJAowW3Xsp8',
			cta2: 'En savoir plus'
		},
		advantages: {
			title: 'Pourquoi sourcer via un développeur?',
			subtitle: 'On parle ici de Sourcing Technique Peer-to-Peer',
			items: [
				{
					title: "Expertise des freelances seniors à l'international",
					description:
						'Connaissance approfondie des écosystèmes technologiques indépendants au Québec, en Europe et en Amérique latine.',
					iconType: 'primary'
				},
				{
					title: 'Accès aux talents indépendants passifs',
					description:
						"Nous contacton des développeurs indépendants d'expérience qui ne sont pas activement à la recherche de contrats.",
					iconType: 'success'
				},
				{
					title: 'Présélection technique rigoureuse pour contrats',
					description:
						'Évaluation approfondie des compétences techniques adaptées au travail par contrat avant que vous ne perdiez du temps en entretiens.',
					iconType: 'surface'
				},
				{
					title: 'Gain de temps considérable pour vos projets',
					description:
						'Évitez le casse-tête du sourcing et du tri des centaines de candidatures non qualifiées pour des contrats.',
					iconType: 'error'
				},
				{
					title: 'Expertise dans les startups et scaleup',
					description:
						'Nous maîtrisons la culture tech au Québec, en Europe et en Amérique latine pour une intégration avec vos équipes.',
					iconType: 'warning'
				},
				{
					title: 'Le sourire de votre comptable',
					description:
						'Zéro frais de dossier, zéro commission sur la 1re année. 100% gratuit, 0% de risque.',
					iconType: 'tertiary'
				}
			]
		},
		benefits: {
			title: 'Notre expertise au service de bâtir votre startup',
			subtitle:
				"Ce qui distingue notre approche pour entrepreneurs indépendants à l'échelle internationale",
			items: [
				{
					title: 'Évaluation technique pour contrats',
					description:
						'Tests de codage, revue de portfolio et validation des compétences pratiques adaptées au travail par contrat par des experts du domaine.',
					iconType: 'blue'
				},
				{
					title: 'Réseau mondial de développeurs freelance',
					description:
						'Accès à un vaste réseau de dévelopeur logiciel indépendants établis au Québec, en Europe et en Amérique latine.',
					iconType: 'green'
				},
				{
					title: 'Compréhension des marchés internationaux pour entrepreneurs indépendants',
					description:
						"Maîtrise des défis spécifiques au recrutement d'entrepreneurs indépendants tech dans les économies québécoise, européenne et latino-américaine.",
					iconType: 'purple'
				}
			]
		},
		process: {
			title: 'Notre processus de sourcing de développeurs indépendants',
			subtitle: 'Une approche ciblée en 4 étapes pour entrepreneurs indépendants',
			items: [
				{
					title: '1. Analyse des besoins techniques pour entrepreneurs indépendants internationaux',
					description:
						"Nous définissons précisément les compétences, l'expérience et la culture technique recherchées pour votre projet avec entrepreneurs indépendants à l'échelle mondiale.",
					stepNumber: 1,
					iconType: 'primary'
				},
				{
					title: "2. Démarchage proactif d'entrepreneurs indépendants internationaux",
					description:
						'Notre équipe contacte directement les développeurs indépendants qualifiés au Québec, en Europe et en Amérique latine, y compris les talents passifs.',
					stepNumber: 2,
					iconType: 'success'
				},
				{
					title: '3. Présélection technique pour contrats',
					description:
						'Nous évaluons rigoureusement les compétences techniques adaptées aux contrats, vérifions les portfolios et effectuons des tests de codage pertinents.',
					stepNumber: 3,
					iconType: 'surface'
				},
				{
					title: '4. Présentation des entrepreneurs indépendants qualifiés',
					description:
						"Vous recevez une sélection restreinte d'entrepreneurs indépendants internationaux déjà validés techniquement, prêts pour l'entretien final et les contrats.",
					stepNumber: 4,
					iconType: 'error'
				}
			]
		},
		cta: {
			title: "Prêt à trouver vos prochains développeurs indépendants d'élite ?",
			subtitle:
				'Discutons de vos besoins techniques pour entrepreneurs indépendants et identifions les talents parfaits pour vos projets',
			button: 'Commencer maintenant',
			buttonHref: 'https://calendar.app.google/dJZc5wBJAowW3Xsp8'
		},
		terminalMessage: {
			targetName: '',
			message:
				"Bonjour [target_name]! On s'infiltre seulement dans votre recrutement après consentement"
		}
	}
};

export type DataType = typeof content;
