// this is intended to be run out of a github pages repo so recompiling every time this gets changed is not a big deal

import {Project} from "../app/project";

export const environmentCommon = {
  projects: <Array<Project>> [
    {
      name: "pronouns",
      repo: "lucypoulton/pronouns",
      displayName: "ProNouns",
      description: "ProNouns is a Minecraft server plugin that lets players set their pronouns, which server admins can substitute into server messages.",
      links: {
        "Docs": "https://docs.lucypoulton.net/pronouns"
      },
      ngLinks: {
        "Helper": "/pnc"
      }
    },
    {
      name: "squirtgun",
      repo: "lucypoulton/squirtgun",
      displayName: "Squirtgun",
      description: "Squirtgun is a multi-purpose Java library that makes the development of cross-platform Minecraft server plugins and Discord bots easier.",
      links: {
        "Maven": "https://mvnrepository.com/search?q=squirtgun&d=net.lucypoulton",
        "Javadoc": "https://javadoc.io/doc/net.lucypoulton/squirtgun-api/"
      },
      ngLinks: {}
    }
  ]
}
