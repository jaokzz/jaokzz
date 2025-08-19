# Olá, eu sou o **João Tuni**! 🐐  

💻 Desenvolvedor **Front-End** apaixonado por tecnologia e criação de interfaces modernas e funcionais.  

---

## 🚀 Minhas Habilidades  

<p align="left">
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/Front%20End-000000?style=for-the-badge&logo=codepen&logoColor=white" />
  
  <!-- HTML -->
  <img src="https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=E34F26" />
  
  <!-- CSS -->
  <img src="https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=1572B6" />
  
  <!-- JavaScript -->
  <img src="https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  
  <!-- TypeScript -->
  <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=3178C6" />
  
  <!-- Node.js -->
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=339933" />
</p>

---

## 🌍 Onde me encontrar?
 <!-- Email -->
  <a href="mailto:jaokzk.22@gmail.com.com">
    <img src="https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
<!-- Instagram -->
  <a href="https://instagram.com/jaokzk">
    <img src="https://img.shields.io/badge/Instagram-000000?style=for-the-badge&logo=instagram&logoColor=E4405F" />
  </a>
  <!-- Discord -->
  <a href="https://discord.com/users/987654321012345678">
  <img src="https://img.shields.io/badge/Discord-000000?style=for-the-badge&logo=discord&logoColor=5865F2" />
</a>

---

✨ Sempre explorando, aprendendo e construindo. E o mais importante, **evoluindo**!

name: 🐍 Snake

on:
  # roda todo dia às 23:45 UTC (ajuste se quiser)
  schedule:
    - cron: "45 23 * * *"
  workflow_dispatch:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Generate snake SVGs
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

