export default {
  id: 'tools',
  title: 'Помощники',
  sections: [
    {
      id: 'trackers',
      label: 'Трекеры',
      title: 'Боевые помощники Пикета',
      blocks: [
        {
          type: 'tracker',
          title: 'Трекер щитов',
          fields: [
            { key: 'activeShields', label: 'Щитов в активных', kind: 'counter' },
            { key: 'safeIntercept', label: 'Перехват безопасен', kind: 'toggle' },
            { key: 'targetName', label: 'Кого прикрываю', kind: 'text' },
          ],
        },
        {
          type: 'checklist',
          title: 'Чеклист Стены щитов',
          items: [
            'Я реально закрываю опасный момент.',
            'Я понимаю, что теряю, если трачу защиту.',
            'После применения команде станет безопаснее.',
          ],
        },
      ],
    },
  ],
}
