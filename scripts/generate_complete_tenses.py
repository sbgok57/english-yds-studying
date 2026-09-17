import json
import os

OUT_PATH = "src/lib/data-tenses-expanded.ts"

# Helper to format string in TypeScript
def to_ts_val(val, indent=6):
    ind = " " * indent
    if isinstance(val, str):
        escaped = val.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        return f'"{escaped}"'
    elif isinstance(val, bool):
        return "true" if val else "false"
    elif isinstance(val, (int, float)):
        return str(val)
    elif isinstance(val, list):
        if len(val) == 0:
            return "[]"
        items = [to_ts_val(x, indent + 2) for x in val]
        if all(isinstance(x, str) and len(x) < 30 for x in val) and len(val) <= 5:
            return f'[{", ".join(items)}]'
        return f'[\n{ind}  ' + f',\n{ind}  '.join(items) + f'\n{ind}]'
    elif isinstance(val, dict):
        items = [f'"{k}": {to_ts_val(v, indent + 2)}' for k, v in val.items()]
        return '{\n' + f'{ind}  ' + f',\n{ind}  '.join(items) + f'\n{ind}}}'
    return "null"

print("to_ts_val ready")
