<p align="center">
  <a href="https://darkie-coder.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Darkie Coder logo">
    </picture>
  </a>
</p>
<p align="center">Trợ lý lập trình AI mã nguồn mở.</p>
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

### Cài đặt

```bash
# YOLO
curl -fsSL https://darkie-coder.ai/install | bash

# Các trình quản lý gói (Package managers)
npm i -g darkie-coder-ai@latest        # hoặc bun/pnpm/yarn
scoop install darkie-coder             # Windows
choco install darkie-coder             # Windows
brew install anomalyco/tap/darkie-coder # macOS và Linux (khuyên dùng, luôn cập nhật)
brew install darkie-coder              # macOS và Linux (công thức brew chính thức, ít cập nhật hơn)
sudo pacman -S darkie-coder            # Arch Linux (Bản ổn định)
paru -S darkie-coder-bin               # Arch Linux (Bản mới nhất từ AUR)
mise use -g darkie-coder               # Mọi hệ điều hành
nix run nixpkgs#darkie-coder           # hoặc github:anomalyco/darkie-coder cho nhánh dev mới nhất
```

> [!TIP]
> Hãy xóa các phiên bản cũ hơn 0.1.x trước khi cài đặt.

### Ứng dụng Desktop (BETA)

Darkie Coder cũng có sẵn dưới dạng ứng dụng desktop. Tải trực tiếp từ [trang releases](https://github.com/anomalyco/darkie-coder/releases) hoặc [darkie-coder.ai/download](https://darkie-coder.ai/download).

| Nền tảng              | Tải xuống                          |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `darkie-coder-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `darkie-coder-desktop-mac-x64.dmg`     |
| Windows               | `darkie-coder-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, hoặc AppImage      |

```bash
# macOS (Homebrew)
brew install --cask darkie-coder-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/darkie-coder-desktop
```

#### Thư mục cài đặt

Tập lệnh cài đặt tuân theo thứ tự ưu tiên sau cho đường dẫn cài đặt:

1. `$DARKIE_CODER_INSTALL_DIR` - Thư mục cài đặt tùy chỉnh
2. `$XDG_BIN_DIR` - Đường dẫn tuân thủ XDG Base Directory Specification
3. `$HOME/bin` - Thư mục nhị phân tiêu chuẩn của người dùng (nếu tồn tại hoặc có thể tạo)
4. `$HOME/.darkie-coder/bin` - Mặc định dự phòng

```bash
# Ví dụ
DARKIE_CODER_INSTALL_DIR=/usr/local/bin curl -fsSL https://darkie-coder.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://darkie-coder.ai/install | bash
```

### Agents (Đại diện)

Darkie Coder bao gồm hai agent được tích hợp sẵn mà bạn có thể chuyển đổi bằng phím `Tab`.

- **build** - Agent mặc định, có toàn quyền truy cập cho công việc lập trình
- **plan** - Agent chỉ đọc dùng để phân tích và khám phá mã nguồn
  - Mặc định từ chối việc chỉnh sửa tệp
  - Hỏi quyền trước khi chạy các lệnh bash
  - Lý tưởng để khám phá các codebase lạ hoặc lên kế hoạch thay đổi

Ngoài ra còn có một subagent **general** dùng cho các tìm kiếm phức tạp và tác vụ nhiều bước.
Agent này được sử dụng nội bộ và có thể gọi bằng cách dùng `@general` trong tin nhắn.

Tìm hiểu thêm về [agents](https://darkie-coder.ai/docs/agents).

### Tài liệu

Để biết thêm thông tin về cách cấu hình Darkie Coder, [**hãy truy cập tài liệu của chúng tôi**](https://darkie-coder.ai/docs).

### Đóng góp

Nếu bạn muốn đóng góp cho Darkie Coder, vui lòng đọc [tài liệu hướng dẫn đóng góp](./CONTRIBUTING.md) trước khi gửi pull request.

### Xây dựng trên nền tảng Darkie Coder

Nếu bạn đang làm việc trên một dự án liên quan đến Darkie Coder và sử dụng "darkie-coder" như một phần của tên dự án, ví dụ "darkie-coder-dashboard" hoặc "darkie-coder-mobile", vui lòng thêm một ghi chú vào README của bạn để làm rõ rằng dự án đó không được xây dựng bởi đội ngũ Darkie Coder và không liên kết với chúng tôi dưới bất kỳ hình thức nào.

---

**Tham gia cộng đồng của chúng tôi** [Discord](https://discord.gg/darkie-coder) | [X.com](https://x.com/darkie-coder)
