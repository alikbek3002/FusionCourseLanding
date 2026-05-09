## Лендинг курса «ИИнутый» — план реализации

Scrollytelling-лендинг для офлайн-курса по ИИ от Fusion AI. Тёмная тема, фиолетовый бренд, Onest, Framer Motion. Все 9 секций согласно брифу.

### 1. Подготовка фундамента

- Скопировать `Оформление_лендинга_фьюжен.css` → `src/styles/tokens.css`
- Импортировать его первой строкой в `src/styles.css` (перед всем остальным)
- Подключить Google Fonts (Onest 400/500/600/700 + JetBrains Mono) через ссылку в `head` в `__root.tsx`
- Заменить базовый шрифт body на `Onest`
- Создать `src/config.ts` с константами: `SEATS_TOTAL`, `SEATS_LEFT`, `TELEGRAM_URL`, `TELEGRAM_HANDLE`, `PHONE`, `PHONE_TEL`, `WHATSAPP_URL`, `RAMIS_INSTAGRAM`, `COURSE_NAME`, `LOCATION`, `ANALYTICS_ID`
- Создать `src/lib/analytics.ts` с функцией `trackCTA(source, channel)` (пока `console.log`)
- Установить `framer-motion`

### 2. Общие компоненты (`src/components/landing/`)

- `BokehOrb.tsx` — анимированный размытый фиолетовый круг (плавает через framer-motion)
- `GlassCard.tsx` — обёртка с glassmorphism-стилем
- `ScrollProgress.tsx` — fixed top, ширина по `useScroll`
- `CTAButton.tsx` — primary/secondary варианты, со встроенным `trackCTA`
- `SectionPill.tsx` — pill-бейдж (БЛОК 1, ПРАКТИКА и т.п.)
- `CountUp.tsx` — счётчик мест с анимацией при попадании в viewport
- `Header.tsx` — лого + бургер-меню на мобайле
- `Footer.tsx`

### 3. Секции (`src/components/sections/`)

Каждая — отдельный компонент, собираются в `src/routes/index.tsx`:

1. `Hero.tsx` — H1 «ИИнутый» с градиентом на «ИИ», pill сверху, два CTA, meta-row, центральный glowing орб с параллаксом (`useScroll` + `useTransform`), посимвольная анимация заголовка
2. `ForWhom.tsx` — одна glassmorphism-карточка, 5 пунктов с purple-checkmark, stagger
3. `Block1Brain.tsx` — номер «01» декор слева, 4 урок-карточки справа
4. `Block2Content.tsx` — зеркальный layout (номер справа), 4 карточки слева
5. `Block3Vibecoding.tsx` — снова номер слева, 4 карточки справа
6. `Practice.tsx` — широкая карточка с `--brand-gradient-deep`, две подкарточки (13, 14), success-pill
7. `Outcomes.tsx` — сетка 2×3, 5 карточек результатов + 6-я CTA-карточка с градиентом
8. `Author.tsx` — двухколоночный, аватар Рамиса слева, текст и чипы справа
9. `FinalCTA.tsx` — full-screen, count-up «8/20», основная Telegram-кнопка, secondary phone+WA, fallback-форма

Контент уроков (4+4+4+2) — в `src/data/lessons.ts` для чистоты.

### 4. Анимации и скроллителлинг

- Базовые варианты `fadeInUp` и `stagger` в `src/lib/motion.ts`
- Везде `whileInView="visible"` с `viewport={{ once: true, margin: "-15%" }}`
- Hero-орб: `useScroll` + `useTransform` для y/scale параллакса
- Карточки уроков: stagger 0.12s, hover translateY(-4px) + border glow
- Outcomes: появление с лёгким `rotateY` по диагонали
- Все орбы плавают через `animate={{ x: [...], y: [...] }}` infinite

### 5. SEO и метаданные

В `src/routes/index.tsx` через `head()`:
- title: «ИИнутый — курс по ИИ от Fusion AI · Технопарк, Бишкек»
- description, og:title, og:description, og:type, twitter:card

### 6. Acceptance — финальная проверка

- 375px и 1440px рендер
- Все цвета через `var(--…)`, никакого хардкода
- Onest реально подгружен (не fallback)
- Telegram-кнопка работает из hero, outcomes и финала
- Скролл-анимации `once: true`, прогресс-бар работает
- Все 14 уроков в правильном порядке
- `SEATS_LEFT` меняется одной переменной

### Технические детали

**Не используем:** Inter, эмодзи в UI (только Lucide-иконки или градиентные блоки), восклицательные знаки, слово «бот», pop-up'ы, таймеры, отзывы, FAQ, секцию цен.

**Стек:** TanStack Start (текущий), React 19, Tailwind v4, Framer Motion, Lucide React (иконки).

**Структура файлов:**
```
src/
  config.ts
  data/lessons.ts
  lib/{motion.ts, analytics.ts}
  styles/tokens.css
  styles.css                    (импортирует tokens.css первой строкой)
  components/
    landing/{BokehOrb, GlassCard, ScrollProgress, CTAButton, SectionPill, CountUp, Header, Footer}.tsx
    sections/{Hero, ForWhom, Block1Brain, Block2Content, Block3Vibecoding, Practice, Outcomes, Author, FinalCTA}.tsx
  routes/index.tsx              (собирает все секции + head meta)
```

**Форма «перезвонить мне»** в финальной CTA: на v1 — просто `console.log` + сообщение «Спасибо, скоро свяжемся» через sonner toast. Не блокирует основной CTA. Бэкенд (Lovable Cloud) подключим отдельно, если попросишь.

### Открытые вопросы

- Фото Рамиса для секции «Автор» — пока заглушка (градиентный аватар с инициалами «РЖ»). Если есть фото — пришли, вставлю.
- SVG-мозг в hero — реализую как pure-CSS gradient orb из Fusion kit с glow, без сложного SVG (быстрее и легче для перфа). Если нужен именно мозг с разрядами — скажи, нарисую SVG отдельно.
