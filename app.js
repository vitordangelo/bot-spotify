const musics = [
  "RICK ASTLEY - CRY FOR HELP",
  "RITA LEE - AMOR E SEXO",
  "RITA LEE - CASO SERIO",
  "ROBBIE WILLIAMS - ANGELS",
  "ROBBIE WILLIAMS - SEXED UP",
  "ROBERTA CAMPOS - MINHA FELICIDADE",
  "ROBERTA FLACK - YOU MAKE ME FEEL BRAND NEW",
  "ROD STEWART - TONIGHT'S THE NIGHT",
  "SADE ADU - THE SWEETEST TABOO",
  "SAM SMITH - TOO GOOD AT GOODBYE",
  "SARAH BRIGHTMAN/GREGORIAN MASTERS OF CHANT - MOMENT OF PEACE",
  "SCLUB 7 - NEVER HAD A DREAM COME TRUE",
  "SEAL - KISS FROM A ROSE",
  "SERGIO MENDES - NEVER GONNA LET YOU GO",
  "SHANIA TWAIN - YOU'RE STILL THE ONE",
  "SIMPLY RED - FOR YOUR BABIES",
  "SIMPLY RED - SAY YOU LOVE ME",
  "SIMPLY RED - STARS",
  "SIMPLY RED - WONDERLAND",
  "SIXPENCE NONE THE RICHER - KISS ME ( ACUSTIC VERSION )",
  "SKANK - ACIMA DO SOL",
  "SKANK - ALGO PARECIDO",
  "SKANK - ESQUECIMENTO",
  "SPANDAU BALLET - TRUE",
  "SPICE GIRLS - TOO MUCH",
  "STANLEY CLARK/GEORGE DUKE - SWEET BABY",
  "STEVIE WONDER - KEEP OUR LOVE ALIVE",
  "STEVIE WONDER - MY CHERIE AMOUR",
  "SUZANNE VEGA - LUKA",
  "SWING OUT SISTER - BREAKOUT",
  "TAKE THAT - BACK FOR GOOD",
  "TAKE THAT - HOW DEEP IS YOUR LOVE",
  "TEARS FOR FEARS - ADVICE FOR THE YOUNG AT HEART",
  "TEARS FOR FEARS - EVERYBODY WANTS TO RULE THE WORLD",
  "TIAGO IORC - NOTHING BUT A SONG",
  "TIAGO IORC - TICKET TO RIDE",
  "TIM MAIA - EU AMO VOCE",
  "TINA TURNER - I DON'T WANNA FIGHT",
  "TINA TURNER - THE BEST",
  "TITAS - E PRECISO SABER VIVER",
  "TITAS - MARVIN",
  "TONI BRAXTON - BREATHE AGAIN",
  "TONI BRAXTON - I DON'T WANT TO",
  "TONI BRAXTON - SPANISH GUITAR",
  "VANESSA CARLTON - A THOUSAND MILES",
  "VANESSA DA MATA/BEN HARPER - BOA SORTE",
  "VANESSA WILLIAMS - SAVE THE BEST FOR LAST",
  "VOGGUE - HERE WE ARE",
  "VOZ DO BRASIL - VOZ DO BRASIL",
  "WHITNEY HOUSTON - FOR THE LOVE OF YOU",
  "WHITNEY HOUSTON - WHERE DO BROKEN HEARTS GO",
  "WILL TO POWER - I'M NOT IN LOVE",
  "YOUSSOU N'DOUR E NENEH CHERY - 7 SECONDS",
  "ZIZI POSSI - ASA MORENA"
  ]


const axios = require('axios');

musics.forEach(music => {
  timer(encodeURI(music))
});

async function spotifyTrackUri(music) {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${music}&type=track&market=BR&limit=1`, {
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer BQAd3mnFGL96LaQRPa16jF9YYYFy5LVss-e22lE21Z6kT4K6ZAWDOcMOhklwk65QBiKCUoktZeJiv5x7bIzl3CvXAP4Fuo4SY0ziRIIeXzzTokmxE7_dYdgxM8Fk_g-nlG9VwuWciObLyl9zvnklhPRxDGszGQnYtbz7H9STysS4qHEgSXyziAGKR9u3NRmf_sQj7wuRz4U",
        "content-length": "0"
      }
    });

    if (response.data.tracks.items[0].uri !== undefined) {
      console.log(response.data.tracks.items[0].uri);
    }
  } catch (error) {
    console.error(error);
  }
}

function timer(music) {
  return new Promise(() => {
    setTimeout(() => {
      spotifyTrackUri(music)
    }, 2000);
  });
}