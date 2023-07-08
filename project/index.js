const ffmpeg = require("ffmpeg-static");
const { exec } = require("child_process");

// Функция для разделения видео на части
function splitVideo(inputFile, outputPrefix, duration) {
  const command = `"${ffmpeg}" -i "${inputFile}" -c copy -reset_timestamps 1 -segment_time ${duration} -f segment ${outputPrefix}_%03d.mp4`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Ошибка при разделении видео:", error);
    } else {
      console.log("Видео успешно разделено на части!");
    }
  });
}

// Пример использования функции splitVideo
const inputFile = "C:\\Users\\User\\Desktop\\test\\input.mp4";
const outputPrefix = "output";
const duration = 58; // 60 секунд или 1 минута

splitVideo(inputFile, outputPrefix, duration);
