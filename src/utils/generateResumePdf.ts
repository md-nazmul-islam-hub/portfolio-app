import html2pdf from 'html2pdf.js'

export async function generateResumePdf() {
  const response = await fetch('/md_nazmul_islam.html')
  const htmlContent = await response.text()

  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')

  // Fix image paths - the HTML uses relative paths that won't resolve in the app context
  doc.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src')
    if (src && src.includes('profile.png')) {
      img.setAttribute('src', window.location.origin + '/profile.png')
    }
  })

  // Create an off-screen container with the resume content
  const container = document.createElement('div')
  container.style.position = 'fixed'
  container.style.left = '-9999px'
  container.style.top = '0'
  container.style.width = '210mm'

  // Copy styles from the HTML
  doc.querySelectorAll('style').forEach((style) => {
    container.appendChild(style.cloneNode(true))
  })

  // Copy body content
  const bodyContent = doc.body.innerHTML
  const wrapper = document.createElement('div')
  wrapper.innerHTML = bodyContent
  container.appendChild(wrapper)

  document.body.appendChild(container)

  await html2pdf()
    .set({
      margin: 0,
      filename: 'md_nazmul_islam.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
    .from(wrapper)
    .save()

  document.body.removeChild(container)
}
