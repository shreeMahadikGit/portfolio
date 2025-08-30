

export function downloadResume() {
  // Create a link to download the static PDF file
  const link = document.createElement('a')
  link.href = '/resume.pdf' // This will look for resume.pdf in the public directory
  link.download = 'Shree-Mahadik-Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
} 