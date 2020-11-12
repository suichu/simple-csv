exports.stringify = rows => {
  return rows.map(row => {
    return row.map(c => {
      if (!c) return '';
      return `"${c.replace(/"/g, '""')}"`;
    }).join(',');
  }).join("\r\n");
};