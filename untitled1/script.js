function encrypt() {
    const encryptInput = document.getElementById("encryptInput").value;
    const shiftKey = parseInt(document.getElementById("shiftKey").value);

    if (isNaN(shiftKey) || shiftKey < 60 || shiftKey > 70) {
        alert("Пожалуйста, введите ключ в диапазоне [60;70]");
        return;
    }

    // Шифрование текста
    const encryptedText = caesarCipher(encryptInput, shiftKey);

    // Отображаем результат в поле "Результата"
    document.getElementById("outputText").value = `${encryptedText}\nZn: ${shiftKey % 94}`;

    // Дублируем зашифрованный текст в поле для дешифрования
    document.getElementById("decryptInput").value = encryptedText;

    // Очищаем поля для расшифровки, ключа и для дополнительного ввода (если необходимо)

    // document.getElementById("shiftKey").value = "";
    // document.getElementById("additionalInput").value = "";
}

function decrypt() {
    const decryptInput = document.getElementById("decryptInput").value;
    const shiftKey = parseInt(document.getElementById("shiftKey").value);

    if (isNaN(shiftKey) || shiftKey < 60 || shiftKey > 70) {
        alert("Пожалуйста, введите ключ в диапазоне [60;70]");
        return;
    }

    // Расшифрование текста
    const decryptedText = caesarCipher(decryptInput, -shiftKey);

    // Отображаем результат в поле "Результата"
    document.getElementById("outputText").value = `${decryptedText}\nZn: ${shiftKey % 94}`;

    // Очищаем поля для шифрования, ключа и для дополнительного ввода (если необходимо)
    document.getElementById("decryptInput").value = "";

    // document.getElementById("shiftKey").value = "";
    // document.getElementById("additionalInput").value = "";
}

// Функция шифра Цезаря
function caesarCipher(text, shift) {
    const shiftzn = shift % 60; // 33 + 26 + 1

    return text
        .split('')
        .map(char => {
            const charCode = char.charCodeAt(0);
            const isAlphanumeric = (charCode >= 33 && charCode <= 126);
            const isLetter = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

            if (isAlphanumeric && !isLetter) {
                const shiftedCharCode = ((charCode - 33 - shiftzn + 60) % 60) + 33;
                return String.fromCharCode(shiftedCharCode);
            }

            return char;
        })
        .join('');
}
