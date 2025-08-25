export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 KB';

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  const formatVal = (value: number): string => {
    // Use 1 decimal for values < 100, otherwise no decimals
    const rounded = value >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1);
  };

  if (bytes < MB) {
    return `${formatVal(bytes / KB)} KB`;
  }
  if (bytes < GB) {
    return `${formatVal(bytes / MB)} MB`;
  }
  return `${formatVal(bytes / GB)} GB`;
}
