import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Định nghĩa một hàm có tên cn nhận bất kỳ số lượng đối số nào có kiểu ClassValue.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
