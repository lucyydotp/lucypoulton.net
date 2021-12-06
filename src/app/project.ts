export interface Project {
  name: String
  displayName: String
  description: String
  lastRelease: String
}

export class ProjectProvider {
  projects: Array<Project> = [
    {
      name: "pronouns",
      displayName: "ProNouns",
      description: "ProNouns is a Minecraft server plugin that lets players set their pronouns, which server admins can substitute into server messages.",
      lastRelease: "2.0.2"
    },
    {
      name: "some-other-project",
      displayName: "Some other project",
      description: "A short description of this project. Eventually this'll all be hooked up to github.",
      lastRelease: "1.0.0"
    }
  ]
}
