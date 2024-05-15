export async function toBase64(file: File, onSuccess: (val: string | ArrayBuffer | null) => void) {
  let reader = new FileReader();
  reader.onload = () => onSuccess(reader.result);
  reader.readAsDataURL(file);

  return reader
}
