export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

    const p = req.body;
    const a = p.answers || {};

    // Flatten into one level so GHL custom-field mapping is trivial
    const flat = {
        // top-level identity → used by GHL find-or-create
        firstName: p.contact.firstName,
        lastName: p.contact.lastName,
        email: p.contact.email,
        phone: p.contact.phone,
        address1: p.contact.street,
        postalCode: p.contact.postalCode,
        city: p.contact.city,
        consent: p.contact.consent,

        // meta
        market: p.meta.market,
        segment: p.meta.segment,
        source: p.meta.source,
        submittedAt: p.meta.submittedAt,
        interests: (p.interests || []).join(', '),
        notes: p.notes,

        // answers (flattened)
        jaarverbruikKwh: a.zonnepanelen?.jaarverbruikKwh,
        daktype: a.zonnepanelen?.daktype,
        batteryReady: a.zonnepanelen?.batteryReady,
        heeftPanelen: a.thuisbatterij?.heeftPanelen,
        batterijCapaciteitKwh: a.thuisbatterij?.gewensteCapaciteitKwh,
        laadpaalType: a.laadpaal?.type,
        laadpaalMetZon: a.laadpaal?.metZonnepanelen,
        woningOuderDan10Jaar: p.woning?.ouderDan10Jaar,
        btwTarief: p.woning?.btwTarief,

        // estimate
        panelen: p.estimate.panelen,
        kwp: p.estimate.kwp,
        jaaropbrengstKwh: p.estimate.jaaropbrengstKwh,
        priceLow: p.estimate.priceLow,
        priceMid: p.estimate.priceMid,
        priceHigh: p.estimate.priceHigh,
        btwVoordeel: p.estimate.btwVoordeel,
        besparingPerJaar: p.estimate.besparingPerJaar,
        besparingPerMaand: p.estimate.besparingPerMaand,
        besparing25Jaar: p.estimate.besparing25Jaar,
        terugverdientijdJaar: p.estimate.terugverdientijdJaar
    };

    try {
        const r = await fetch(process.env.GHL_WEBHOOK_URL_PC, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(flat)
        });
        return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
    } catch (err) {
        return res.status(500).json({ error: 'forward failed' });
    }
}
