export default function copiarTexto(texto: string) {
  navigator.clipboard.writeText(texto);
  alert("Número de telefone copiado para a área de trabalho");
}
