# AGENTS.md

## 项目概述

这是一个为 [ai.sh](https://github.com/gengxiankun/ai.sh) 提供插件的注册表仓库。不包含运行时代码或构建步骤。

## 目录约定

- `commands/<name>/command.json` — Command 插件（`/cmd` 命令）
- `skills/<name>/skill.json` — Skill 插件（AI 对话工具）
- 每个插件子目录需包含 json 清单文件和脚本文件

## 注册表

`index.json` 是插件的注册表索引。新增或移除插件时**必须**同步更新 `index.json`：

```json
{
  "version": 1,
  "commands": [],
  "skills": []
}
```

`command.json` 和 `skill.json` 的字段规范由 ai.sh 定义，详见 ai.sh 仓库。

## 贡献流程

1. Fork → 2. 创建插件子目录 → 3. 编写 json + 脚本 → 4. 更新 index.json → 5. 提交 PR

## 开发命令

无。这是一个纯注册表仓库，没有构建、测试、或 lint 步骤。
