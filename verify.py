from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    current_dir = os.getcwd()
    page.goto(f"file://{current_dir}/index.html")
    page.wait_for_timeout(500)

    # Click on the second tab to view Fab BM
    page.get_by_role("button", name="2. Global Semiconductor HVAC Benchmark").click()
    page.wait_for_timeout(500)

    # Scroll to the bottom to see the new section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)

    # Take screenshot at the key moment
    page.screenshot(path="screenshot.png")
    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="."
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
