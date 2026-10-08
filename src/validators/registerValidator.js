import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string({ error: "نام کاربری اجباری است" })
    .trim()
    .min(1, "نام کاربری اجباری است")
    .min(6, "حداقل 6 کاراکتر")
    .max(40, "حداکثر 40 کاراکتر"),
  password: z
    .string({ error: "رمز عبور اجباری است" })
    .min(1, "رمز عبور اجباری است")
    .min(8, "حداقل 8 کاراکتر")
    .max(128, "حداکثر 128 کاراکتر"),
});

export default loginSchema;
