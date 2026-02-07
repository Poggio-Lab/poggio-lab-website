import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Poggio Lab
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Massachusetts Institute of Technology<br />
              Building 46, Room 5177<br />
              Cambridge, MA 02139
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Research</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/#publications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/blogsupdates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blogposts and Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">People</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/people" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/people#former-postdoctoral-associates-phd-students" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/people#visiting-students-scholars-and-scientists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Collaborators
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Poggio Lab, MIT. All rights reserved.
          </p>
          <a
            href="https://accessibility.mit.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  )
}
