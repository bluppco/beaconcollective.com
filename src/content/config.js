import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

        logo: z.string(),
		link: z.string(),
        nav_links: z.array(

			z.object({
				title: z.string(),
				link: z.string(),
			})

		).optional(),

	})

})

export const collections = {

	"header": headerCollection,

}
