<p align="center">
  <a href="https://darkie-coder.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Logo do Darkie Coder">
    </picture>
  </a>
</p>
<p align="center">O agente de programação com IA de código aberto.</p>
<p align="center">
  <a href="https://darkie-coder.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/darkie-coder-ai"><img alt="npm" src="https://img.shields.io/npm/v/darkie-coder-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/darkie-coder/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/darkie-coder/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![Darkie Coder Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://darkie-coder.ai)

---

### Instalação

```bash
# YOLO
curl -fsSL https://darkie-coder.ai/install | bash

# Gerenciadores de pacotes
npm i -g darkie-coder-ai@latest        # ou bun/pnpm/yarn
scoop install darkie-coder             # Windows
choco install darkie-coder             # Windows
brew install anomalyco/tap/darkie-coder # macOS e Linux (recomendado, sempre atualizado)
brew install darkie-coder              # macOS e Linux (fórmula oficial do brew, atualiza menos)
sudo pacman -S darkie-coder            # Arch Linux (Stable)
paru -S darkie-coder-bin               # Arch Linux (Latest from AUR)
mise use -g darkie-coder               # qualquer sistema
nix run nixpkgs#darkie-coder           # ou github:anomalyco/darkie-coder para a branch dev mais recente
```

> [!TIP]
> Remova versões anteriores a 0.1.x antes de instalar.

### App desktop (BETA)

O Darkie Coder também está disponível como aplicativo desktop. Baixe diretamente pela [página de releases](https://github.com/anomalyco/darkie-coder/releases) ou em [darkie-coder.ai/download](https://darkie-coder.ai/download).

| Plataforma            | Download                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `darkie-coder-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `darkie-coder-desktop-mac-x64.dmg`     |
| Windows               | `darkie-coder-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` ou AppImage         |

```bash
# macOS (Homebrew)
brew install --cask darkie-coder-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/darkie-coder-desktop
```

#### Diretório de instalação

O script de instalação respeita a seguinte ordem de prioridade para o caminho de instalação:

1. `$DARKIE_CODER_INSTALL_DIR` - Diretório de instalação personalizado
2. `$XDG_BIN_DIR` - Caminho compatível com a especificação XDG Base Directory
3. `$HOME/bin` - Diretório binário padrão do usuário (se existir ou puder ser criado)
4. `$HOME/.darkie-coder/bin` - Fallback padrão

```bash
# Exemplos
DARKIE_CODER_INSTALL_DIR=/usr/local/bin curl -fsSL https://darkie-coder.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://darkie-coder.ai/install | bash
```

### Agents

O Darkie Coder inclui dois agents integrados, que você pode alternar com a tecla `Tab`.

- **build** - Padrão, agent com acesso total para trabalho de desenvolvimento
- **plan** - Agent somente leitura para análise e exploração de código
  - Nega edições de arquivos por padrão
  - Pede permissão antes de executar comandos bash
  - Ideal para explorar codebases desconhecidas ou planejar mudanças

Também há um subagent **general** para buscas complexas e tarefas em várias etapas.
Ele é usado internamente e pode ser invocado com `@general` nas mensagens.

Saiba mais sobre [agents](https://darkie-coder.ai/docs/agents).

### Documentação

Para mais informações sobre como configurar o Darkie Coder, [**veja nossa documentação**](https://darkie-coder.ai/docs).

### Contribuir

Se você tem interesse em contribuir com o Darkie Coder, leia os [contributing docs](./CONTRIBUTING.md) antes de enviar um pull request.

### Construindo com Darkie Coder

Se você estiver trabalhando em um projeto relacionado ao Darkie Coder e estiver usando "darkie-coder" como parte do nome (por exemplo, "darkie-coder-dashboard" ou "darkie-coder-mobile"), adicione uma nota no README para deixar claro que não foi construído pela equipe do Darkie Coder e não é afiliado a nós de nenhuma forma.

---

**Junte-se à nossa comunidade** [Discord](https://discord.gg/darkie-coder) | [X.com](https://x.com/darkie-coder)
