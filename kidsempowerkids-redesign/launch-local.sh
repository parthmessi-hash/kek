#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
PORT="${1:-4173}"

echo "Serving Kids Empower Kids redesign at http://localhost:${PORT}"
python3 -m http.server "${PORT}"
