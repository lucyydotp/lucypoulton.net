export interface Project {
  name: String,
  repo: String,
  displayName: String
  description: String
  lastRelease?: String,
  longDescription?: String,
  links: { [key: string]: string },
  ngLinks: { [key: string]: string }
}
