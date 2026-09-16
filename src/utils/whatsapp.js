const ICONNECT_WHATSAPP_NUMBER = '917306705396'

export function createWhatsAppUrl(message) {
  return `https://wa.me/${ICONNECT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`
}

export function openWhatsApp(message) {
  const url = createWhatsAppUrl(message)

  // Direct navigation is more reliable than window.open()
  // because some browsers block programmatically opened tabs.
  window.location.href = url
}