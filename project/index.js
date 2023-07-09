// const ffmpeg = require("ffmpeg-static");
// const { exec } = require("child_process");

// // Функция для разделения видео на части
// function splitVideo(inputFile, outputPrefix, duration) {
//   const command = `"${ffmpeg}" -i "${inputFile}" -c copy -reset_timestamps 1 -segment_time ${duration} -f segment ${outputPrefix}_%03d.mp4`;

//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error("Ошибка при разделении видео:", error);
//     } else {
//       console.log("Видео успешно разделено на части!");
//     }
//   });
// }

// // Пример использования функции splitVideo
// const inputFile = "//Users//ch1cha_gl//Desktop//Исходники//second//second//kaspyiskiyGruz2.mp4";
// const outputPrefix = "kaspyiskiyGruz2";
// const duration = 28; // 60 секунд или 1 минута

// splitVideo(inputFile, outputPrefix, duration);


const fs = require("fs");
const path = require("path");
const ffmpeg = require("ffmpeg-static");
const { exec } = require("child_process");

// Функция для разделения видео на части
function splitVideo(inputFile, outputPrefix, duration) {
  const outputFolder = "video"; // Название папки для сохранения разделенных видеофайлов
  const outputDir = path.join(__dirname, outputFolder); // Полный путь к папке
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir); // Создаем папку, если она не существует
  }

  const command = `"${ffmpeg}" -i "${inputFile}" -c copy -reset_timestamps 1 -segment_time ${duration} -f segment "${path.join(outputDir, outputPrefix)}_%03d.mp4"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Ошибка при разделении видео:", error);
    } else {
      console.log("Видео успешно разделено на части!");
    }
  });
}

// Пример использования функции splitVideo
const inputFile = "//Users//ch1cha_gl//Desktop//Исходники//Exile//Exile.mp4";
const outputPrefix = "Exile";
const duration = 29; // 60 секунд или 1 минута

splitVideo(inputFile, outputPrefix, duration);
