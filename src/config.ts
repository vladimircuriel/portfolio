import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Ing. Vladimir Curiel | Portfolio",
	subtitle:
		"Ingeniero en Ciencias de la Computación | Ing. de Software | Ing. de Datos | Ciencia de Datos | IA",
	lang: "es",
	themeColor: {
		hue: 285,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "assets/images/wallpaper.jpg",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/vladimircuriel",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/vladimircuriel.jpg",
	name: "Vladimir Curiel",
	bio: "Ingeniero en Ciencias de la Computación | Ing. de Software | Ing. de Datos | Ciencia de Datos | IA",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/vladimircuriel",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/vladimircuriel/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
