import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

		link: z.string(),
		live: z.boolean(),
		order: z.number(),
		title: z.string(),

	})

})

export const collections = {

	"header": headerCollection,

}
