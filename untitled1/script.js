// Функция для шифрования текста
function encrypt() {
    // Получаем элемент ввода текста для шифрования
    const encryptInput = document.getElementById("encryptInput");
    // Получаем значение сдвига из элемента ввода ключа
    const shiftKey = parseInt(document.getElementById("shiftKey").value);

    // Получаем введенный текст
    const inputText = encryptInput.value;
    // Шифруем текст с использованием шифра Цезаря и устанавливаем результат в текстовых полях
    document.getElementById("outputText").value = caesarCipher(inputText, shiftKey);
    document.getElementById("decryptInput").value = caesarCipher(inputText, shiftKey);
}

// Функция для дешифрования текста
function decrypt() {
    // Получаем элемент ввода текста для дешифрования
    const decryptInput = document.getElementById("decryptInput");
    // Получаем значение сдвига из элемента ввода ключа
    const shiftKey = parseInt(document.getElementById("shiftKey").value);

    // Получаем введенный текст
    const inputText = decryptInput.value;
    // Дешифруем текст с использованием шифра Цезаря и устанавливаем результат в текстовое поле
    document.getElementById("outputText").value = caesarCipher(inputText, -shiftKey);

    // Очищаем поля ввода после дешифрования
    document.getElementById("decryptInput").value = "";
    document.getElementById("encryptInput").value = "";
    document.getElementById("shiftKey").value = "";
}

// Функция для обработки текста с использованием шифра Цезаря
function caesarCipher(text, shift) {
    return text
        .split('')
        .map(char => {
            const charCode = char.charCodeAt(0);

            const isAlphanumeric = (charCode >= 33 && charCode <= 126);

            if (isAlphanumeric) {
                const shiftedCharCode = ((charCode - 33 - shift + 94) % 94) + 33;
                return String.fromCharCode(shiftedCharCode);
            }

            return char;
        })
        .join('');
}
