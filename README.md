# ai.sh Plugins

> 为 [ai.sh](https://github.com/gengxiankun/ai.sh) 提供可安装的 Command 和 Skill 插件。

## 目录结构

- `index.json` — 注册表
- `commands/` — Command 插件（`/cmd` 命令）
- `skills/` — Skill 插件（AI 对话工具）

## 如何贡献

1. Fork 本仓库
2. 在对应目录下创建插件子目录
3. 包含 `command.json`（或 `skill.json`）和脚本文件
4. 更新 `index.json` 注册表
5. 提交 PR
