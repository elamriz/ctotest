import { businessConfig } from "./config";

export function generateWhatsAppMessage(homeType: string, workType: string, customText?: string): string {
  const homeLabel = homeType.charAt(0).toUpperCase() + homeType.slice(1);
  const workLabel = workType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (workType === "autre" && customText) {
    return `Bonjour, j'aimerais un devis pour: ${homeLabel} - ${customText}. Merci!`;
  }

  return `Bonjour, j'aimerais un devis pour: ${homeLabel} - ${workLabel}. Merci!`;
}

export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
}

export function getPhoneLink(): string {
  return `tel:${businessConfig.phone}`;
}

export function getEmailLink(subject?: string): string {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${businessConfig.email}${subjectParam}`;
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
