export interface Project {
  name: String,
  repo: String,
  displayName: String
  description: String
  lastRelease?: String,
  longDescription?: String,
  links: object
}

export class ProjectProvider {
  projects: Array<Project> = [
    {
      name: "pronouns",
      repo: "lucypoulton/pronouns",
      displayName: "ProNouns",
      description: "ProNouns is a Minecraft server plugin that lets players set their pronouns, which server admins can substitute into server messages.",
      links: {
        "Docs": "https://docs.lucypoulton.net/pronouns"
      }
    },
    {
      name: "squirtgun",
      repo: "lucypoulton/squirtgun",
      displayName: "Squirtgun",
      description: "Library thing",
      links: {}
    }
  ]
}
