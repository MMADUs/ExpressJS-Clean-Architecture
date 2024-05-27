import vine from "@vinejs/vine";

export const productSchema = vine.object({
  name: vine.string().minLength(5).maxLength(20),
  price: vine.number().positive().decimal([0, 2]),
  category_id: vine.number().positive()
})