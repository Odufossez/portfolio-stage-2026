export const tracesData = [
    {
        id: 'maboss-branches',
        identification: 1,
        caption: "Capture d'écran des branches du projet MaBoSS. Repère A: banche principale. Repère B: ma branche pour ajouter la documentation.",
        image: new URL('@/assets/traces/branches_maboss.png', import.meta.url).href,
    },
    {
        id: 'maboss-langs',
        identification: 2,
        caption: "Capture d'écran des proportions de langages dans le projet.",
        image: new URL('@/assets/traces/screen_langages_maboss.png', import.meta.url).href,
    },
    {
        id: 'jupyter-maboss',
        identification: 3,
        caption: "Capture d'écran d'un notebook Jupyter avec des exemples d'application de MaBoSS.",
        image: new URL('@/assets/traces/jupyter_metastasis.png', import.meta.url).href,
    },
];

export const getTrace = (id) => {
    const normalizedId = id.toLowerCase();
    return tracesData.find(trace => trace.id.toLowerCase() === normalizedId);
};
