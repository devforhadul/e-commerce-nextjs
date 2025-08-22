"use client";

import { useForm } from "react-hook-form";

export default function ProductAddForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Product:", data);

    reset()
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-center text-2xl font-bold">Add Product</h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Product Title</label>
          <input
            type="text"
            placeholder="Enter product title"
            {...register("title", { required: "Title is required" })}
            className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be greater than 0" },
            })}
            className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            placeholder="Enter description"
            {...register("description", { required: "Description is required" })}
            className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium">Rating</label>
          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            placeholder="Enter rating (1-5)"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 1, message: "Minimum rating is 1" },
              max: { value: 5, message: "Maximum rating is 5" },
            })}
            className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.rating && (
            <p className="text-sm text-red-500">{errors.rating.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
