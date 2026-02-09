import pandas as pd
import sys
import os

def process_spreadsheet(file_path, target_lot):
    try:
        # Load the entire Excel file into a dictionary of DataFrames
        # sheet_name=None ensures we read EVERY sheet in the workbook
        print(f"Reading file: {file_path}...")
        excel_data = pd.read_excel(file_path, sheet_name=None)
        
        # Determine the output path (saves in the same folder as the source)
        output_filename = f"Lot_{target_lot}_Export.xlsx"
        output_path = os.path.join(os.path.dirname(file_path), output_filename)
        
        # We use 'openpyxl' as the engine to write the new Excel file
        with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
            found_any = False
            
            for sheet_name, df in excel_data.items():
                # CORE LOGIC:
                # 1. Access Column C (index 2)
                # 2. Convert to string to avoid errors with mixed data types
                # 3. Check if our target_lot exists in that column
                column_c_data = df.iloc[:, 2].astype(str).str.lower()
                
                if target_lot.lower() in column_c_data.values:
                    print(f"Match found in sheet: {sheet_name}")
                    # Write the matching sheet to our new workbook
                    df.to_excel(writer, sheet_name=sheet_name, index=False)
                    found_any = True
        
        if found_any:
            print(f"SUCCESS: Created {output_filename}")
        else:
            print(f"NOT FOUND: Lot {target_lot} was not found in Column C of any sheet.")
            # If we created an empty file during the process, delete it
            if os.path.exists(output_path):
                os.remove(output_path)

    except Exception as e:
        print(f"CRITICAL ERROR: {str(e)}")

if __name__ == "__main__":
    # sys.argv allows Electron to pass the file path and lot number to this script
    if len(sys.argv) > 2:
        file_path = sys.argv[1]
        target_lot = sys.argv[2]
        process_spreadsheet(file_path, target_lot)
    else:
        print("ERROR: Not enough arguments provided to the Python script.")